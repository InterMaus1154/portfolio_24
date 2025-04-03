import {FC, HTMLAttributes} from 'react';
import "./HexagonBorderImage.css";

type Props = HTMLAttributes<HTMLDivElement>

const HexagonBorderImage: FC<Props> = ({...props}) => {
    return (
        <div className={"hexagon-image-wrapper"} {...props}>
            <div className="hexagon-image-border"></div>
            <div className="hexagon-image-blender"></div>
            <div className="hexagon-image-image"></div>
        </div>
    );
};

export default HexagonBorderImage;