// Importing React
import React from 'react';

// the ExternalLink function, aka, a component for external links
const ExternalLink = (props) => {
    
    let urlTOvisit = props.urlContent;
    let textToDisplay = props.linkContent;

    return (
        <a href={urlTOvisit} target="_blank" rel="noopener noreferrer">{textToDisplay}</a>
    );
}

export default ExternalLink;
