import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.products.map((product) => (
        <ProductItem product={product} key={product.slug}/>
      ))}
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home Page">
      {page}
    </Layout>
  )
}

export default Page