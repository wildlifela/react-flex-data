
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from '../../index';
import _ from 'lodash';



const DATA = [
    {
        name: 'Han',
        class: 'Rogue',
        skills: 'Piloting, Marksmanship, Guile, Subterfuge',
        primary: 'Blaster'
    },
    {
        name: 'Leia',
        class: 'Leader',
        skills: 'Diplomacy, Finance, Robotics',
        primary: 'Rally'
    },
    {
        name: 'Luke',
        class: 'Jedi',
        skills: 'Swordplay, Force Powers, Moral Ambiguity',
        primary: 'Lightsaber'
    },
    {
        name: 'Chewbaka',
        class: 'Ranger/Berzerker',
        skills: 'Strength, Marksmanship, Wrestling, Pie Eating',
        primary: 'Bowcaster'
    }
];

class ExampleTable extends Component {

    render() {
        return (
            <Table
                rowHeight={25}
                columnRatio={[2,2,4,2]}
                altColor="#cfcfcf"
            >
                <TableHeader>
                    {Object.keys(DATA[0]).map((k) => <TableHeaderColumn key={k}>{k}</TableHeaderColumn>)}
                </TableHeader>
                <TableBody>
                    {DATA.map((row, i) => {
                        return (
                            <TableRow key={i}>
                                {_.map(row, (col, k) => <TableRowColumn key={`clol_${k}_row_${i}`}>{col}</TableRowColumn>)}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}



const appContainer = document.getElementById('app');

render(<ExampleTable />, appContainer);

