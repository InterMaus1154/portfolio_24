import {FC, HTMLAttributes} from 'react';
import "./HexagonBorderImage.css";
import Tilt from 'react-parallax-tilt';

type Props = HTMLAttributes<HTMLDivElement>

const HexagonBorderImage: FC<Props> = ({...props}) => {
    return (
        <Tilt className={"hexagon-tilt-wrapper"}>
            <div className={"hexagon-image-wrapper"} {...props}>
                <div className="hexagon-image-border"></div>
                <div className="hexagon-image-blender"></div>
                <div className="hexagon-image-image"></div>
            </div>
        </Tilt>
    );
};

export default HexagonBorderImage;