interface Props {
  data: string[];
}

export default function IncludeTour({ data }: Props) {
  return (
    <div>
      <h3 className="font-heading text-lg tracking-wider text-white">
        Incluido
      </h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
