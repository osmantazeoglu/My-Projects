
const RemoveFromCardButton = ({ onRemovefromCard }) => {
  const handleRemoveCard = () => {
    onRemovefromCard();
  };

  return (
    <button className="item-reduce-btn" onClick={handleRemoveCard}>-</button>
  );
};
export default RemoveFromCardButton;
