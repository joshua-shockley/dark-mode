import React from 'react';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValues);


    useEffect(() => {
        if (darkMode !== false) {
            document.body.classList.add("dark-mode");
        } else { document.body.classList.remove("dark-mode") };


    }, [darkMode]);

    return [darkMode, setDarkMode]
}