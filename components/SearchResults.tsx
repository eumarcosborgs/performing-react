import { List, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number,
    price: number,
    priceFormatted: string
    title: string
  }>
  onAddToWishList: (id: number) => void
  totalPrice?: number
}

export function SearchResults({ results, onAddToWishList, totalPrice = 0}: SearchResultsProps) {
  const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div style={style} key={key}>
        <ProductItem
          product={results[index]} 
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List 
        height={300}
        rowHeight={25}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRender}
      />

      {/* {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product} 
            onAddToWishList={onAddToWishList}
          />
        )
      })} */}
    </div>
  )
}