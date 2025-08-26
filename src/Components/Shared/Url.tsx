interface UrlProps {
  url: string
}

const Url = ({url}: UrlProps) => {
  return (
    <div className="flex p-y h-[32px] items-center">
      <label
        htmlFor="password"
        className="text-text-primary py-1 min-w-[100px] flex justify-between"
      >
        <span className="text-gray-400">
          &gt;
        </span>
        <span className="text-text-primary">url:</span>
      </label>
      <span className="text-app-color">&nbsp;{url}</span>
    </div>
  )
}

export default Url