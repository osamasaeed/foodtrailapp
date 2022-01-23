import React from 'react'
import Svg from 'react-native-svg';
import { ClipPath, Image, Path } from 'react-native-svg';
import { itemImage3 } from '../../shared/staticAssets';

const BackgroundSVG = ({ Width, Height }) => {
    const d = [
        `M 0 0`,      // starting point x y
        `h ${Width}`, // horizontal line from x(0) to Width and y remain 0
        `v ${Height}`,// vertical line from x  remain at Width and from y (0) to Height
        `a ${Width} ${Width} 0 0 1 ${-Width} 0`, // arc from both handles are equal to Width to back -Width at x axis and y remain 0
        `Z`
    ]
        .join(" ");

    return (
        <Svg height={Height + Width / 7} width={Width}>
            <ClipPath id='clip'>
                <Path d={d} />
            </ClipPath>
            <Image
                href={itemImage3}
                clipPath='url(#clip)'
                width={Width}
                height={'100%'}
                preserveAspectRatio='xMidYMix slice'
            />
        </Svg>
    )
}

export default BackgroundSVG
