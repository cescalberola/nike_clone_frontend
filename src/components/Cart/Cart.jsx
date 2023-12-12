import React from 'react'

const Cart = () => {
  return (
    <>
    <Divider orientation="left">Cart</Divider>
    <List
      header={<div>Products</div>}
      footer={
        <div className="container-buttons">
          <Button onClick={clearCart}>Clear Cart </Button>
          {token ?<Button type="primary" onClick={()=>{
              orderService.createOrder(cart)
              clearCart()
              }}>Create Order</Button>:<Link to="/login">Go to login to shops</Link>}
          
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>Name product:</Typography.Text> {item}
        </List.Item>
      )}
    />
  </>
  )
}

export default Cart
