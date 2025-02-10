# from flask import Flask, request, jsonify, send_file
# from flask_pymongo import PyMongo
# from gridfs import GridFS
# from bson import ObjectId
# from flask_cors import CORS
# import io
# import os

# app = Flask(__name__)

# # Enable CORS so React can make requests to Flask API
# CORS(app)

# # Configure MongoDB
# app.config["MONGO_URI"] = "mongodb://localhost:27017/imageDB"
# mongo = PyMongo(app)
# fs = GridFS(mongo.db)
# metadata_collection = mongo.db.metadata  # Metadata collection for images

# # Store image in MongoDB (POST)
# @app.route("/upload_image", methods=["POST"])
# def upload_image():
#     if "image" not in request.files or not all(k in request.form for k in ["status", "location", "square_feet"]):
#         return jsonify({"error": "Missing image or metadata fields"}), 400

#     image = request.files["image"]
#     status = request.form["status"]  # "Completed" or "Ongoing"
#     location = request.form["location"]
#     square_feet = request.form["square_feet"]

#     image_id = fs.put(image, filename=image.filename)  # Store image in GridFS

#     # Store metadata in MongoDB
#     metadata_collection.insert_one({
#         "image_id": image_id,
#         "status": status,
#         "location": location,
#         "square_feet": square_feet
#     })

#     return jsonify({"message": "Image uploaded successfully", "id": str(image_id)}), 201

# # Fetch images by status (GET)
# @app.route("/get_images/<status>", methods=["GET"])
# def get_images(status):
#     images = metadata_collection.find({"status": status})

#     image_list = []
#     for image in images:
#         img_data = fs.get(image["image_id"])  # Retrieve image data from GridFS
#         img_url = f"/get_image/{image['image_id']}"  # URL to fetch the image
        
#         image_list.append({
#             "id": str(image["image_id"]),
#             "url": img_url,
#             "location": image["location"],
#             "square_feet": image["square_feet"],
#             "status": image["status"]
#         })

#     if not image_list:
#         return jsonify({"message": "No images found"}), 404

#     return jsonify(image_list), 200

# # Fetch individual image by ID (GET)
# @app.route("/get_image/<image_id>", methods=["GET"])
# def get_image(image_id):
#     try:
#         image = fs.get(ObjectId(image_id))  # Retrieve the image from GridFS
#         return send_file(io.BytesIO(image.read()), mimetype="image/jpeg")  # Send image as response
#     except:
#         return jsonify({"error": "Image not found"}), 404

# if __name__ == "__main__":
#     app.run(debug=True)
