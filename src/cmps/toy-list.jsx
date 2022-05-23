import { ToyPreview } from "../cmps/toy-preview.jsx"

export function ToyList({ toys, onRemoveToy, onSetDone }) {
    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <ToyPreview
                    key={toy._id}
                    toy={toy}
                    onRemoveToy={onRemoveToy}
                    onSetDone={onSetDone}
                />
            )}
        </ul>
    )
}