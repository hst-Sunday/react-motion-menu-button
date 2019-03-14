import React from "react";
import PropTypes from "prop-types";
import "./floatButton.css";
import home from "../../assets/home.png";
import fork from "../../assets/fork.png";
import { Motion, spring, StaggeredMotion } from "react-motion";
const FloatButton = (props) => {
  const {
    mode = "sur",
    isOpen = false,
    buttonSize = 60,
    backgroundColor = "#eee",
    left = 155,
    top = 450,
    childrenButtonData = [],
    mainButtonImgSrc = home,
    closeImgSrc = fork,
    ChildButtonToMainButtonSpacingDistance = 80,
    SeparationAngle = 40
  } = props;
  const indexButtonSize = {
    width: buttonSize,
    height: buttonSize
  };
  const pngSize = buttonSize - 25;
  const backColor = {
    backgroundColor: backgroundColor
  }
  const positionXY = {
    left: left,
    top: top,
  }
  const baseStyles = {
    ...indexButtonSize,
    ...backColor,
    ...positionXY
  }

  /**
   * 
   * @param {number} Xleft 距离左侧位置
   * @param {number} Ytop 距离顶部位置
   * @param {number} childrenArrayLen 子按钮个数
   * @param {number} ChildButtonToMainButtonSpacingDistance 子按钮的与主按钮的距离，两圆中心的距离
   * @param {number} SeparationAngle 每个子按钮间的角度
   * @param {String} mode 子按钮的飞出模式
   */
  const renderChildrenButton = (Xleft, Ytop, childrenArrayLen, ChildButtonToMainButtonSpacingDistance, SeparationAngle, mode) => {
    const SpringConfig = { stiffness: 400, damping: 28 }; //react-motion的spring配置
    const BaseAngle = (180 - ((childrenArrayLen - 1) * SeparationAngle)) / 2; //用来计算第一个子按钮的位置
    const defaultStyles = Array.from({ length: childrenArrayLen }).map((v, index) => { //StaggeredMotion需要的默认样式
      return { top: Ytop, left: Xleft, rotate: -180, scale: 0.5 }
    })
    const radian = (degree) => (degree * (Math.PI / 180));  //计算弧度，用来计算子按钮的位置
    const childrenButtonFlyOutMode = (mode, childrenIndex) => { //根据mode返回相应的样式
      const styles = {
        top: spring(Ytop - chidlButtonPosition(childrenIndex).positionY, SpringConfig),
        left: spring(Xleft - chidlButtonPosition(childrenIndex).positionX, SpringConfig),
        rotate: spring(0, SpringConfig),
        scale: spring(0.76, SpringConfig)
      }
      switch (mode) {
        case "sur":
          return styles
        case "left":
          return {
            ...styles,
            top: spring(Ytop),
            left: spring(Xleft - chidlButtonPositionForHorizontal(childrenIndex).positionX, SpringConfig),
          }
        case "right":
          return {
            ...styles,
            top: spring(Ytop),
            left: spring(Xleft + chidlButtonPositionForHorizontal(childrenIndex).positionX, SpringConfig),
          }
        case "up":
          return {
            ...styles,
            top: spring(Ytop - chidlButtonPositionForVertical(childrenIndex).positionY),
            left: spring(Xleft),
          }
        case "down":
          return {
            ...styles,
            top: spring(Ytop + chidlButtonPositionForVertical(childrenIndex).positionY),
            left: spring(Xleft),
          }
        case "LT":
          return {
            ...styles,
            top: childrenIndex % 2 === 0
              ? spring(Ytop - chidlButtonPositionForVertical(childrenIndex).positionY + childrenIndex / 2 * ChildButtonToMainButtonSpacingDistance, SpringConfig)
              : spring(Ytop),
            left: childrenIndex % 2 === 0
              ? spring(Xleft)
              : spring(Xleft - chidlButtonPositionForHorizontal(childrenIndex).positionX + (childrenIndex + 1) / 2 * ChildButtonToMainButtonSpacingDistance, SpringConfig)
          }
        case "RT":
          return {
            ...styles,
            top: childrenIndex % 2 === 0
              ? spring(Ytop - chidlButtonPositionForVertical(childrenIndex).positionY + childrenIndex / 2 * ChildButtonToMainButtonSpacingDistance, SpringConfig)
              : spring(Ytop),
            left: childrenIndex % 2 === 0
              ? spring(Xleft)
              : spring(Xleft + chidlButtonPositionForHorizontal(childrenIndex).positionX - (childrenIndex + 1) / 2 * ChildButtonToMainButtonSpacingDistance, SpringConfig)
          }
        default:
          return styles
      }
    }
    const chidlButtonPosition = (childrenIndex) => { //计算每个按钮的X轴和Y轴的距离
      return {
        positionX: ChildButtonToMainButtonSpacingDistance * Math.cos(radian(childrenIndex * SeparationAngle + BaseAngle)),
        positionY: ChildButtonToMainButtonSpacingDistance * Math.sin(radian(childrenIndex * SeparationAngle + BaseAngle)),
      }
    };
    const chidlButtonPositionForHorizontal = (childrenIndex) => { //mode为left或right时计算每个按钮的X轴距离
      return {
        positionX: ChildButtonToMainButtonSpacingDistance * (childrenIndex + 1),
      }
    };
    const chidlButtonPositionForVertical = (childrenIndex) => { //mode为up或down时计算每个按钮的X轴距离
      return {
        positionY: ChildButtonToMainButtonSpacingDistance * (childrenIndex + 1),
      }
    }
    const chidlButtonStyles = (childrenArrayLen) => { //用来生成子按钮的样式数组
      return Array.from({ length: childrenArrayLen }).map((v, i) => {
        return isOpen ? childrenButtonFlyOutMode(mode, i)
          : {
            top: spring(Ytop, SpringConfig),
            left: spring(Xleft, SpringConfig),
            rotate: spring(-180, SpringConfig),
            scale: spring(0.5, SpringConfig)
          }
      })
    };
    const calculateNextStyleFun = (nextStyle) => { //react-motion的styles函数
      return nextStyle.map((value, index) => {
        return chidlButtonStylesArray[index]
      })
    }
    const chidlButtonStylesArray = chidlButtonStyles(childrenArrayLen); //一个包含所有子按钮样式的数组

    return (
      <StaggeredMotion
        defaultStyles={defaultStyles}
        styles={calculateNextStyleFun}
      >
        {
          (interpolatingStyles) => <div>
            {
              interpolatingStyles.map((styles, index) => {
                const { bgColor = "#eee", imgSrc, imgAlt = "no." + index } = childrenButtonData[index]
                return (
                  <div
                    key={index}
                    className="float-button"
                    style={{
                      ...baseStyles,
                      top: styles.top,
                      left: styles.left,
                      backgroundColor: bgColor,
                      transform: `rotate(${styles.rotate}deg) scale(${styles.scale})`,
                    }}
                    onClick={(e) => childrenButtonData[index].onClick(e)}
                  >
                    {imgSrc ? <img src={imgSrc} width={pngSize} alt={imgAlt} /> : ""}
                  </div>
                )
              })
            }
          </div>
        }
      </StaggeredMotion>
    )
  }

  return (
    <div>
      {renderChildrenButton(left, top, childrenButtonData.length, ChildButtonToMainButtonSpacingDistance, SeparationAngle, mode)}
      <Motion
        style={props.isOpen
          ? { rotate: spring(360, { stiffness: 500, damping: 30 }) }
          : { rotate: spring(0, { stiffness: 500, damping: 30 }) }}
      >
        {
          (interpolatingStyles) =>
            <div
              className="float-button"
              style={{ ...baseStyles, transform: `rotate(${interpolatingStyles.rotate}deg)` }}
              onClick={(e) => props.onClick(e)}
            >
              {
                props.isOpen
                  ? <img src={closeImgSrc} width={pngSize} alt={"close-img"} />
                  : <img src={mainButtonImgSrc} width={pngSize} alt={"main-img"} />
              }
            </div>
        }
      </Motion>
    </div>
  )
}

FloatButton.propTypes = {
  mode: PropTypes.string,
  isOpen: PropTypes.bool,
  buttonSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  left: PropTypes.number,
  top: PropTypes.number,
  childrenButtonData: PropTypes.array,
  mainButtonImgSrc: PropTypes.string,
  closeImgSrc : PropTypes.string,
  ChildButtonToMainButtonSpacingDistance: PropTypes.number,
  SeparationAngle: PropTypes.number,
}

export default FloatButton;