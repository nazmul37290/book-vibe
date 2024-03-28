const Faq = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5 ">FAQ</h1>
      <div className="flex flex-col gap-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I browse books on the website without registering?
          </div>
          <div className="collapse-content">
            <p>Yes, You can browse books on the website without registering</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I suggest a book to be added to the website?
          </div>
          <div className="collapse-content">
            <p>Yes, You can suggest books through our contact</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How often are new books added to the website?
          </div>
          <div className="collapse-content">
            <p>It updates every month</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I access the website on mobile devices?
          </div>
          <div className="collapse-content">
            <p>Yes, you can</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
