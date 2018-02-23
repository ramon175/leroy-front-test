import uuid from 'uuid';

const initialPosts = [
    {description: 'Want people to use your product? Use it yourself', votes:11, user: 'Nobtaka Nukui', createdAt: 'January 1st 2018 19:34:00', id: uuid(), tag: 'Product Design'},
    {description: 'Font Size Idea: px at the Root, rem for Components, em for Text Elements', votes:9, user: 'Siddhart Arun', createdAt: 'January 5th 2018 05:13:00', id: uuid(),tag: 'UX Theory'},
    {description: 'What Do You Do With a Failed Product', votes:4, user: 'Sacha Greif', createdAt: 'January 10th 2018 21:08:00', id: uuid(),tag: 'Opinion'},
    {description: "Some things can't be wireframed", votes:4, user: 'Sacha Greif', createdAt: 'January 10th 2018 21:08:00', id: uuid(),tag: 'Opinion'},
    {description: 'Case Study: Redesigning The Folyo Ladning Page', votes:3, user: 'Siddhart Arun', createdAt: 'January 10th 2018 21:08:00', id: uuid(),tag: 'Case Study'},
    {description: "Don't let bad process or structure kil great design", votes:2, user: 'Nobtaka Nukui', createdAt: 'January 10th 2018 21:08:00', id: uuid(),tag: 'Product Design'},
]

export default (state = initialPosts, action) => {
    switch(action.type){
        case 'ADD_POST': 
        return [
            ...state,
            action.post
          ];
        case 'REMOVE_POST':
        return state.filter(post => {
              return post.id !== action.id
          })
        case 'UPVOTE_POST':
          return state.map(post => {
                  if(post.id === action.id){
                      post.votes = post.votes +=1 
                      return {
                        ...post
                      }
                  }else{
                      return post
                  }
              })
        default: 
            return state;
    }
}

