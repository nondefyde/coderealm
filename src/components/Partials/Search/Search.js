import React, { Fragment } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const Search = () => (
    <Fragment>
        <InputGroup>
            <Input placeholder="Search...." />
            <InputGroupAddon addonType="append">
                <Button>Search</Button>
            </InputGroupAddon>
        </InputGroup>
    </Fragment>
)

export default Search;