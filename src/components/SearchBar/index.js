
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Search } from 'react-bootstrap-icons';

import './styles.css';


export default function SearchBar() {

    return (
        <section className="search__titles">
            <div className="container">
                <div className="input-group">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend >
                            <InputGroup.Text id="basic-addon1" className="bg-gray search__input__icon" >
                                <Search />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl className="search__input" />
                        <Button className="bg-gray btn__search" variant="outline-secondary">Buscar</Button>
                    </InputGroup>
                </div>
            </div>
        </section>
    );
}