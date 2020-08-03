import React from 'react';

export default function ButtonLink(props) {
    // props => {ClassName : o que alguém passar}

    return (

        <a href="props.href" className={props.className}>
            {props.children}
        </a>


    );

}

