import DataTable from '../components/DataTable.js'

export default function table({match}) {
  const dataset = match.params.dataset
  return (
    <div className="w-100 tc">
      <div className="flex justify-center helvetica">
        <h2 className="ttc">{match.params.dataset} Table</h2>
      </div>
      <div className="mt4">
        <DataTable dataset={dataset}/>
      </div>
    </div>
  )

}