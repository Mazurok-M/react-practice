import GeneralCardItem from './GeneralCardItem/GeneralCardItem';

export default function GeneralCardList({
  ListData,
  onDeleteCard,
  onToggleModal,
  isModalOpen,
  onEditCard,
}) {
  return (
    <div>
      {ListData.length > 0 &&
        ListData.map(({ text, relation }) => (
          <GeneralCardItem
            key={text}
            text={text}
            relation={relation}
            id={text}
            onDeleteCard={onDeleteCard}
            isModalOpen={isModalOpen}
            onToggleModal={onToggleModal}
            onEditCard={onEditCard}
          />
        ))}
    </div>
  );
}
