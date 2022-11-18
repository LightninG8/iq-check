import s from './SliderArrow.module.css'

export const SliderArrow: React.FC<any> = (props: any) => {
  return (
    <div
      {...props}
      className={props.className + ' ' + s.arrow}  
      style={{ ...props.style, display: "block" }}
    />
      
  )
}
