import React from 'react'

const Grid = ({ config, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {config.map((item) => (
            <th key={item.field}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem, i) => (
          <tr key={i}>
            {config.map((configItem, i) =>
              configItem.component ? (
                <td key={i}>
                  {configItem.component({ data: dataItem[configItem.field] })}
                </td>
              ) : (
                <td key={i}>{dataItem[configItem.field]}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Grid
