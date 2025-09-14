import{createContext, useState} from 'react';
export const BudgetContext = createContext();

export const BudgetProvider=({children}) =>{

    const[budgetMode, setBudgetMode] = useState(false); //stato booleano false con budgetMode, setBudgetMode serve per portarlo a vero
     
     const [maxPrice, setMaxPrice] = useState(null); 

    return(
        <BudgetContext.Provider value = {{budgetMode,setBudgetMode, maxPrice, setMaxPrice }}>
            {children}
        </BudgetContext.Provider>
    );

};