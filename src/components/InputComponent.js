function InputComponent({ label, value }) {
    return (
      <div class="flex flex-col items-center text-sky-600">
        <label>{label}</label>
        <input
          class="bg-transparent w-20 text-center"
          type="number"
          value={value}
          readOnly
        />
      </div>
    );
  }
//exportar 
export default InputComponent;
