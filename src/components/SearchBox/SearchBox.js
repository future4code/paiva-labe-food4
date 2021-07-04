import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { getRestaurants } from "../../services/restaurant";
import RestCard from '../RestCard/RestCard';
import useControlInput from "../../hooks/useControlInput.js";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4px 6px 4px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '280px',
        height: '40px',
        marginBottom: '1.2vh',
        marginTop: '1px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 6,
    },
    iconButton: {
        padding: 3,
    },
}));

const SearchBox = () => {
    const classes = useStyles();
    const history = useHistory();
    const { restaurants, setters } = useContext(GlobalStateContext);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [search, handleSearch] = useControlInput();

    const filterSearch = () => {
        if (restaurants && restaurants.length > 0) {
            const filtered = restaurants.filter((restaurant) => {
                return restaurant.name.toLowerCase().includes(search.toLowerCase());
            });
            setFilteredRestaurants([...filtered]);
        }
    };

    const clearFilter = () => {
        setFilteredRestaurants([]);
    };

    useEffect(() => {
        clearFilter();
        filterSearch();
    }, [search]);

    const filteredSearch = filteredRestaurants.map((restaurant) => {
        return (
            <RestCard
                key={restaurant.id}
                name={restaurant.name}
                title={restaurant.title}
                deliveryTime={restaurant.deliveryTime}
                shipping={restaurant.shipping}
                logoUrl={restaurant.logoUrl}
                history={history}
                id={restaurant.id}
            />
        );
    });

    return (
        <div>
            <Paper component="form" className={classes.root}>
                <IconButton position="start" type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    autoFocus
                    className={classes.input}
                    id={"search-input"}
                    placeholder={"Restaurante"}
                />
            </Paper>
        </div>

    )
}

export default SearchBox
