import React from 'react'
import { css } from '@emotion/core'

function SliderContent({ translate, transition, width, children }) {
    return (
        <div css={css`
            transform: translateX(-${translate}px);
            transition: transform ease-out ${transition}s;
            height: 100%;
            width: ${width}px;
            display: flex;
        `}>
            {children}
        </div>
    )
}

export default SliderContent
