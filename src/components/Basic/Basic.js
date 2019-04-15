import React from 'react'
import styles from './Basic.module.css'
import Loader from 'react-loader-spinner'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io'
import PropTypes from 'prop-types'

export const Header = props => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{props.h1}</h1>
      {props.children}
    </header>
  )
}

Header.propTypes = {
  h1: PropTypes.string
}

export const HeaderBtn = props => {
  const Icon = props.icon
  return (
    <Icon onClick={props.onClick} className={`${styles.headerBtn} ${props.className}`}>
      {props.children}
    </Icon>
  )
}

HeaderBtn.propTypes = {
  icon: PropTypes.func,
  onClick: PropTypes.func,
}

export const CustomLoader = props => {
  const loaderProps = {
    width: "30px",
    type: "ThreeDots",
    color: "var(--main-color)",
  }

  return (
    <div className={`${styles.loader} ${props.className}`}>
      <Loader {...loaderProps}/>
    </div>
  )
}

export const Input = props => {
  return (
    <div className={styles.inputContainer}>
      <input
        required={!!props.required}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        style={props.style}
        name={props.id}
        className={`${styles.input} ${props.className}`}/>
      {!props.showLoader ? '' : <CustomLoader/>}
    </div>
  )
}

Input.propTypes = {
  required: PropTypes.bool,
  showLoader: PropTypes.bool,
  onChange: PropTypes.func,
}

export const Btn = (props) => {
  return (
    <button
      name={props.name}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${styles.btn} ${props.className} ${props.disabled ? styles.diabled : ''}`}>
      {props.title}
    </button>
  )
}

Btn.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
}

export const Label = props => {
  return (
    <label
      className={styles.label} 
      htmlFor={props.id}>{props.label}</label>
  )
}

export const TextArea = props => {
  return (
    <textarea
      {...props}
      className={styles.textArea}/>
  )
}

export const LabeledInput = props => {
  return (
    <div className={styles.labeledInput}>
      <Label {...props}/>
      <Input {...props}/>
    </div>
  )
}

export const LabeledTextArea = props => {
  return (
    <div className={styles.labeledTextArea}>
      <Label {...props}/>
      <TextArea {...props}/>
    </div>
  )
}

export const Form = props => {
  return (
    <form
      {...props}
      className={`${styles.form} ${props.className}`}>
      <fieldset>
        <legend>{props.legend}</legend>
        {props.children}
      </fieldset>
    </form>
  )
}

export const Msg = props => {
  return (
    <p className={styles.msg} style={props.style}>{props.text}</p>
  )
}

export const TitledText = props => {
  return !props.content ? '' : (
    <>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </>
  )
}

export const CheckBox = props => {
  return (
    <div className={styles.checkbox}>
      <input 
        style={{
          background: `image(${Moon})`
        }}
        checked={props.checked}
        onChange={props.onChange}
        type='checkbox'/>
      <Moon 
        className={`${styles.icon} ${!props.checked ? '' : styles.checked}`}/>
      <Sun
        className={`${styles.icon} ${props.checked ? '' : styles.checked}`}/>
    </div>
  )
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

// TODO (upgrade) #2: Dot
export const Dot = props => {
  return <span className={`${styles.dot}`}></span>
}

export const Error = props => {
  return !props.error ? '' : (
    <div className={styles.error}>
      <span>{props.msg || 'Something went wrong. Please try to go back or refresh the page'}</span>
    </div>
  )
}

export const ReqStatus = props => {
  return (
    <span className={`${styles.reqStatus} ${props.status}`}>
      {props.status}
    </span>
  )
}

ReqStatus.propTypes = {
  status: PropTypes.oneOf(['Pending', 'Accepted', 'Declined'])
}