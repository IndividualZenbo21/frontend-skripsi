const CardProduct = (props) => {
  const {children} = props
  return (
      <div
          className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
        {children}
      </div>
  )
}

const Header = (props) => {
  const {image} = props
  return (
      <a href="#" className="flex justify-center">
        <img src={image} alt="product" className="p-8 rounded-t-lg"/>
      </a>
  )
}

const Body = (props) => {
  const {children, title} = props
  return (
      <div className="px-5 pb-5 h-full">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
        </a>
        <p className="text-m text-white">{children}</p>
      </div>
  )
}

const Footer = (props) => {
  const {price, handleAddToCart, id} = props
  return (
      <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp {" "} {price.toLocaleString('id-ID', {
              styles: "currency",
              currency: "IDR"
            })}</span>
      </div>
  )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct
