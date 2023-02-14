class CreateReccies < ActiveRecord::Migration[7.0]
  def change
    create_table :reccies do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.integer :rating
      t.references :user, null: false, foreign_key: true
      t.references :destination, null: false, foreign_key: true

      t.timestamps
    end
  end
end
