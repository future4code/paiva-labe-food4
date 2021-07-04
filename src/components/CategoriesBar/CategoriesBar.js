import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CategoriesContainer } from "./styled";

const CategoriesBar = () => {
    const { currentCategory, setCurrentCategory } = useContext(GlobalStateContext);
    const [value, setValue] = useState(false);

    const cardRef = React.createRef()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <CategoriesContainer>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
            >
                <Tab
                    variant="h6"
                    label="Burger"
                    value="Hamburguer"
                    onClick={
                        currentCategory === "Hamburguer"
                            ? () => setCurrentCategory("")
                            : () => setCurrentCategory("Hamburguer")
                    }
                />
                <Tab
                    label="Asiática"
                    value="Asiática"
                    onClick={
                        currentCategory === "Asiática"
                            ? () => setCurrentCategory("")
                            : () => setCurrentCategory("Asiática")
                    }
                />
                <Tab
                    label="Árabe"
                    value="Árabe"
                    onClick={
                        currentCategory === "Árabe"
                            ? () => setCurrentCategory("")
                            : () => setCurrentCategory("Árabe")
                    }
                />
            </Tabs>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
            >
                <Tab
                    label="Sorvetes"
                    value="Sorvetes"
                    onClick={
                        currentCategory === "Sorvetes"
                            ? () => setCurrentCategory("")
                            : () => setCurrentCategory("Sorvetes")
                    }
                />


                <Tab
                    label="Carnes"
                    value="Carnes"
                    onClick={
                        currentCategory === "Carnes"
                            ? () => setCurrentCategory("")
                            : () => setCurrentCategory("Carnes")
                    }
                />
                <Tab
                    label="Mexicana"
                    value="Mexicana"
                    onClick={
                        currentCategory === "Mexicana"
                            ? () => setCurrentCategory("")
                            : () => setCurrentCategory("Mexicana")
                    }
                />
            </Tabs>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
            >
                <Tab
                    label="Petiscos"
                    value="Petiscos"
                    onClick={
                        currentCategory === "Petiscos"
                            ? () => setCurrentCategory("")
                            : () => setCurrentCategory("Petiscos")
                    }
                />
                <Tab
                    label="Baiana"
                    value="Baiana"
                    onClick={
                        currentCategory === "Baiana"
                            ? () => setCurrentCategory("")
                            : () => setCurrentCategory("Baiana")
                    }
                />

            </Tabs>
        </CategoriesContainer>
    );
};

export default CategoriesBar;