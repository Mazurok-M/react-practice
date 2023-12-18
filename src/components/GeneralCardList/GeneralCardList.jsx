import GeneralCardItem from './GeneralCardItem/GeneralCardItem';

export default function GeneralCardList({
  listData,
  onDeleteCard,
  isModalOpen,
  toggleModal,
  onEditCard,
}) {
  return (
    <div>
      {listData.length > 0 &&
        listData.map(({ text, relation, id }) => (
          <GeneralCardItem
            text={text}
            key={text}
            relation={relation}
            id={id}
            onDeleteCard={onDeleteCard}
            isModalOpen={isModalOpen}
            onToggleModal={toggleModal}
            onEditCard={onEditCard}
          />
        ))}
    </div>
  );
}
