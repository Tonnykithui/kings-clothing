const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://images.unsplash.com/photo-1477064996809-dae46985eee7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvd24lMjBicmltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://images.unsplash.com/photo-1576063270807-d4cc0f0c2942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBoYXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://images.unsplash.com/photo-1572707567570-a98ee5ceec5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyb3duJTIwY293Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://images.unsplash.com/photo-1470320137052-e6968bda0539?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JleSUyMGJyaW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://images.unsplash.com/photo-1543687768-5006dbe44ac6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJlZCUyMGNhcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://images.unsplash.com/photo-1551126764-47b3ca5a7261?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBhbG0lMjAlMjBjYXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://images.unsplash.com/photo-1534764775185-038d3c62f4ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlZCUyMGNhcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://images.unsplash.com/photo-1543352245-63e64ac19e17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29sZiUyMGNhcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://images.unsplash.com/photo-1483103068651-8ce44652c331?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMGNhcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://images.unsplash.com/photo-1543908753-04c7ebbecc21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFkZGlkYXMlMjBubWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://images.unsplash.com/photo-1606297199333-e93f7d726cab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFkZGlkYXMlMjB5ZWV6eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://images.unsplash.com/photo-1565379793984-e65b51b33b37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBjb252ZXJzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://images.unsplash.com/photo-1515555230216-82228b88ea98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHdoaXRlJTIwYWlyZm9yY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://images.unsplash.com/photo-1523978470318-3ffac5558af3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHJlZCUyMGhpZ2h0b3BzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://images.unsplash.com/photo-1603356731507-e60823d4e4c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMGJyb3dufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'https://images.unsplash.com/photo-1610897600804-c36e2336ad3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://images.unsplash.com/photo-1542838686-c679dbeb5db4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRpbWJlcmxhbmQlMjBib290c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'https://images.unsplash.com/photo-1592887415647-2f0b8da8f55e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwamVhbiUyMGphY2tldHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1611095006359-d237350a7e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JleSUyMGplYW4lMjBqYWNrZXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: 'https://images.unsplash.com/photo-1574098317470-5b08ec9d9d11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHRyZW5jaCUyMGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: 'https://images.unsplash.com/photo-1592327877233-90b9bfd92e48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlbmNoJTIwY29hdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'https://images.unsplash.com/photo-1588568003129-fa08922225a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3JhbCUyMGJsb3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://images.unsplash.com/photo-1517970640957-23d07d5ed08c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmxvcmFsJTIwZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwZG90JTIwZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://images.unsplash.com/photo-1580374377807-f84903723cdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmlwcGVkJTIwc3dlYXRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eWVsbG93JTIwdHJhY2slMjBzdWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://images.unsplash.com/photo-1526160404000-b3f5ec7071a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBibG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: 'https://images.unsplash.com/photo-1520627226741-957359a3caab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbW8lMjBkb3duJTIwdmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: 'https://images.unsplash.com/photo-1517191297489-48c463380e8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmxvcmFsJTIwdHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZ3NsZWV2ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: 'https://images.unsplash.com/photo-1530286910461-6a1960d1e83a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbmslMjB0c2hpcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://images.unsplash.com/photo-1570563676231-d476637bc4bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGplYW4lMjBzbGVldmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://images.unsplash.com/photo-1572080404736-d9fa92b5f970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxqZWFuJTIwc2xlZXZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: 25
        }
      ]
    }
  ]

  export default SHOP_DATA