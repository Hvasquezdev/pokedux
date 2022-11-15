import React from "react";

import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

function StarButton({ isFilled, onClick }) {
  const starIcon = isFilled ? <StarFilled /> : <StarOutlined />;

  return <Button icon={starIcon} onClick={onClick} />;
}

export default StarButton;
