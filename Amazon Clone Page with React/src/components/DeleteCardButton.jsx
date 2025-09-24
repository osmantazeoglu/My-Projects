const DeleteFromCardButton = ({ onDeletefromCard }) => {
    const handleDeleteCard = () => {
      onDeletefromCard();
    };
  
    return (
      <button className="item-delete-btn" onClick={handleDeleteCard}>Del</button>
    );
  };
  export default DeleteFromCardButton;