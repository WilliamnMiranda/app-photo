interface IProps {
  value: string;
}
const Label = ({ value }: IProps) => {
  return <div>{value}</div>;
};

export default Label;
