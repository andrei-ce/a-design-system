import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string> // Object <key, value>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th> && <th>Visually</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                  <td>{Number(value.replace('rem', '')) * 16}px</td>
                ) && (
                  <td>
                    <div
                      style={{
                        height: '1rem',
                        backgroundColor: 'white',
                        width: value,
                      }}
                    ></div>
                  </td>
                )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
