import { useDispatch, useSelector } from "react-redux"
import { onOpenDateModal,onCloseDateModal } from "../store/ui/uiSlice";

export const useUiSore = () => {
     const dispatch=useDispatch();

  const { isDateModalOpen }=useSelector(state=>state.ui);

  const openDateModal=()=>{
     dispatch(onOpenDateModal())
  }
  const closeDateModal=()=>{
     dispatch(onCloseDateModal())
  }
  return{
     //Propertis
     isDateModalOpen,

     //Methods
     openDateModal,
     closeDateModal,
  }
}