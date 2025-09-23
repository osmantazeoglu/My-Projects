import "../styles/components/RemoveCartButton.css";

const RemoveFromCardButton = ({ onRemovefromCard }) => {
  const handleRemoveCard = () => {
    onRemovefromCard();
  };

  return (
    <button id="RemoveCard" onClick={handleRemoveCard}>Del</button>
  );
};
export default RemoveFromCardButton;
