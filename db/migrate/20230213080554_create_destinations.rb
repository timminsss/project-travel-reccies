class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :city
      t.string :country
      t.references :user, null: false, foreign_key: true
      t.string :image_url

      t.timestamps
    end
  end
end
