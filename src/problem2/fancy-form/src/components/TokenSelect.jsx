export default function TokenSelect({ token, tokens, onChange }) {
    return (
      <select
        value={token}
        onChange={onChange}
        className="border rounded p-2 bg-lightBrown text-primaryBrown"
      >
        {tokens.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    );
  }
  