export default interface SimpleTabsProps {
  data: ITab[];
  className?: string;
  defaultActiveKey?: ITabKey;
  onChange?: (key: ITabKey) => void;
}

export type ITabKey = number | string;

export interface ITab {
  key: ITabKey;
  text: string;
}
