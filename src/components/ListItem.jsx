export default function ListItem({ text, textData }) {
  return (
    <span>
      <b>{text}:</b> {textData || 'unknown'}
    </span>
  );
}
