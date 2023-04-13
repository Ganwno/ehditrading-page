export default function Modal(props) {
  return (
    <>
<div className={"modal "+ (props.showModal && 'modal-open')}>
  <div className="modal-box space-y-4 relative">
    <label onClick={props.onClose} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Add new Symbol</h3>
    {props.children}
  </div>
</div>
    </>
  );
}
