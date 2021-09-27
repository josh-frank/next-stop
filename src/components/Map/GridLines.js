import { useSelector } from "react-redux";

export default function GridLines() {

    const { height, width } = useSelector( state => state.client );

    return (
        <g>
            { [ ...Array( Math.floor( height / 100 ) + 1 ).keys() ].map( line => (
                <line x1="0" y1={ line * 100 } x2={ width } y2={ line * 100 } stroke="lightgray" strokeWidth="0.5" />
            ) ) }
            { [ ...Array( Math.floor( width / 100 ) + 1 ).keys() ].map( line => (
                <line x1={ line * 100 } y1="0" x2={ line * 100 } y2={ height } stroke="lightgray" strokeWidth="0.5" />
            ) ) }
        </g>
    );

}
