import Draggable from "react-draggable";
import "./DraggableButton.css";

const DraggableButton = () => {
  return (
    <Draggable>
      <button className="draggable-button">Drag me!</button>
    </Draggable>
  );
};

export default DraggableButton;
