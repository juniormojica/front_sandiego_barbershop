import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender
} from '@tanstack/react-table'
import services from '../../mockData.json'
import s from './BarberTable.module.css'

// Función para calcular los totales
const calculateTotals = (data) => {
  return data.reduce(
    (totals, row) => {
      const efectivoPayment = row.payments.find((payment) =>
        payment.methods.some((method) => method.name === 'efectivo')
      )
      const totalEfectivo = efectivoPayment ? efectivoPayment.amount : 0

      const totalTransferencia = row.payments.reduce((sum, payment) => {
        const isNotEfectivo = payment.methods.some(
          (method) => method.name !== 'efectivo'
        )
        return isNotEfectivo ? sum + payment.amount : sum
      }, 0)

      return {
        efectivo: totals.efectivo + totalEfectivo,
        transferencia: totals.transferencia + totalTransferencia
      }
    },
    { efectivo: 0, transferencia: 0 }
  )
}

export default function BarberTable({ barberName }) {
  const columnHelper = createColumnHelper()

  // Calcular los totales
  const totals = calculateTotals(services.data)

  const columns = [
    columnHelper.accessor((row, index) => index + 1, {
      header: '#',
      id: 'index'
    }),
    columnHelper.accessor(
      (row) => {
        const date = new Date(row.date)
        const time = date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }) // Formato de 12 horas
        return time
      },
      {
        header: 'Hora'
      }
    ),

    columnHelper.accessor(
      (row) => {
        const efectivoPayment = row.payments.find((payment) =>
          payment.methods.some((method) => method.name === 'efectivo')
        )
        return efectivoPayment ? efectivoPayment.amount : 0
      },
      {
        header: 'Efectivo',
        footer: () => `Total Efect: ${totals.efectivo}`
      }
    ),
    columnHelper.accessor(
      (row) => {
        const totalTransferencia = row.payments.reduce((sum, payment) => {
          const isNotEfectivo = payment.methods.some(
            (method) => method.name !== 'efectivo'
          )
          return isNotEfectivo ? sum + payment.amount : sum
        }, 0)
        return totalTransferencia
      },
      {
        header: 'Transferencia',
        footer: () => `Total Transf: ${totals.transferencia}`
      }
    ),
    columnHelper.display({
      id: 'actions',
      header: 'Acciones',
      cell: ({ row }) => (
        <div className={s.actions}>
          <button
            className={s.detailButton}
            onClick={() => handleDetailClick(row.original)}
          >
            Detalle
          </button>
          <button
            className={s.modifyButton}
            onClick={() => handleEditClick(row.original)}
          >
            Modificar
          </button>
        </div>
      )
    })
  ]

  // Funciones para manejar los clics en los botones
  const handleDetailClick = (row) => {
    // Implementa la lógica para mostrar los detalles del registro
    console.log('Detalle:', row)
  }

  const handleEditClick = (row) => {
    // Implementa la lógica para editar el registro
    console.log('Modificar:', row)
  }

  const table = useReactTable({
    data: services.data, // Asegúrate de que `services.data` contiene los datos adecuados
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={`${s.tableContainer}`}>
      <h3>{barberName}</h3>
      <table className={`${s.table} ${s.tableStriped} ${s.tableHover}`}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className={`${s.tableHeader}`} key={header.id}>
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className={`${s.tableCell}`} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='2'>
              <strong>Total Efectivo:</strong>
            </td>
            <td>0</td>
            <td>
              <strong>Total Transf:</strong> 20000
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
