import Row from '../common/Row';

const BottomHeader = (props) => {
  const { menus } = props;

  return (
    <div className="w-full h-[60px] px-[10px] bg-[#a8afb60d]">
      <Row className="flex h-full items-center justify-between">
        {menus.map((item, index) => (
          <div key={index} className="text-[16px] text-slate-800">
            {item}
          </div>
        ))}
      </Row>
    </div>
  );
};

export default BottomHeader;
