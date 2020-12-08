import React, {useState} from "react";
import ContainerWithBar from "./ContainerWithBar";

export default {
  title: "ContainerWithBar",
};

export const SimpleContainerWithBar = () => {
  const [data, setData] = useState(
    "回复客户看发哈很快就复健科符号卡卡安徽科技风和缴费卡卡号发安科技路恢复开机后发表在没办法没办法了康师傅hi发布"
  );
  return (
    <>
      <ContainerWithBar
        style={{
          width: "100%",
          height: 600,
        }}
      >
        {data.split("").map((char, idx) => (
          <div
            style={{
              width: "100%",
              height: 60,
              backgroundColor: "lightcoral",
              boxSizing: "border-box",
              borderBottom: "1px solid #fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              userSelect: "none",
            }}
            key={idx}
          >
            {char}
          </div>
        ))}
      </ContainerWithBar>

      <div
        style={{
          marginTop: 40,
        }}
      >
        <button onClick={() => setData(data + "交话费凤凰健康空白付款吧开办费")}>
          添加数据
        </button>
      </div>
    </>
  );
};
