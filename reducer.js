

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":{
            return {
                ...state,
                count:(state.count++),
            }
        }
        case "Decrement":{
            return {
                ...state,
                count:(state.count--),
            }
        }
        case "Add":
      console.log(action)
      return {
        ...state,
        count: (state.count += action.payload),
      };

    case "Sub":
      return {
        ...state,
        count: (state.count -= action.payload),
      };

    case "Multi":
      return {
        ...state,
        count: (state.count *= action.payload),
      };

    case "Div":
      return {
        ...state,
        count: (state.count /= action.payload),
      };
        
        default : {
            return state;
        }
    
  
}
}

export {reducer}
