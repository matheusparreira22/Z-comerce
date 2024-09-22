type Contact = {
    first: string;
    last: string;
    avatar: string;
    twitter: string;
    notes: string;
    favorite: boolean;
    id?: number | string;
  };
  
  // Função que retorna uma array com três objetos do tipo Contact
   function getContacts(): Contact[] {
    console.log('entrei')
    return [
      {
        first: "John",
        last: "Doe",
        avatar: "https://robohash.org/johndoe.png?size=200x200",
        twitter: "john_doe",
        notes: "Loyal customer",
        favorite: true,
      },
      {
        first: "Jane",
        last: "Smith",
        avatar: "https://robohash.org/janesmith.png?size=200x200",
        twitter: "jane_smith",
        notes: "Prefers email contact",
        favorite: false,
      },
      {
        first: "Bob",
        last: "Johnson",
        avatar: "https://robohash.org/bobjohnson.png?size=200x200",
        twitter: "bob_johnson",
        notes: "VIP client",
        favorite: true,
      },
    ];
  }
export default getContacts