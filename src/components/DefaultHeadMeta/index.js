import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

const DefaultHeadMeta = (props, {metadata: {pkg}}) => (
    <div hidden>
        <Helmet
            title="Aapeli Haanpuu's portfolio"
            meta={ [
                {
                    name: 'generator',
                    content: `${process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
                },
                {
                    name: 'keywords',
                    content: 'Aapeli, Haanpuu, Portfolio, Developer'
                },
                {
                    name: 'author',
                    content: 'Aapeli Haanpuu'
                },
                {
                    property: 'og:title',
                    content: pkg.description
                },
                {
                    property: 'og:description',
                    content: 'A portfolio on the works and job history of Aapeli Haanpuu.'
                },
                {
                    property: 'og:image',
                    content: `${pkg.homepage}/assets/img/Kasvokuva1_337x337.jpg`
                },
                ...props.meta ? props.meta : [],
            ] }
            script={[
                {
                    src: 'https://cdn.polyfill.io/v2/polyfill.min.js'
                },
                ...props.scripts ? props.scripts : [],
            ]}
        />
        
        <Helmet
            meta={ [{
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            }] }
        />
        <style>{ '@-ms-viewport { width: device-width; } ' }</style>
        <link rel='icon' href='img/favicon.ico'/>
        <script async src='https://www.google-analytics.com/analytics.js'></script>
    </div>
)

DefaultHeadMeta.propTypes = {
    meta: React.PropTypes.arrayOf(React.PropTypes.object),
    scripts: React.PropTypes.arrayOf(React.PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
    metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
