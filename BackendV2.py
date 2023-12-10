# TEST TEST TEST
from transformers import pipeline
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/translate/<string:language>/<string:text>', methods=['GET'])
def translate_function(language, text):
    # return jsonify({'translation': language})
    if language in SUPPORTED_LANGUAGES:
        try:
            translator = pipeline("translation", model=SUPPORTED_LANGUAGES[language])
            translation_result = translator(text)
            return ({'translation': translation_result[0]['translation_text']})
        except Exception as e:
            return f"Error during translation: {str(e)}"
    else:
        return f"Translation for {language} is not supported."



SUPPORTED_LANGUAGES = {
    # Add more languages and their corresponding models here
    'french': 'Helsinki-NLP/opus-mt-en-fr',  # France
    'german': 'Helsinki-NLP/opus-mt-en-de',  # Germany
    'spanish': 'Helsinki-NLP/opus-mt-en-es',  # Spain
    'italian': 'Helsinki-NLP/opus-mt-en-it',  # Italy
    'chinese': 'Helsinki-NLP/opus-mt-en-zh',  # China
    'arabic': 'Helsinki-NLP/opus-mt-en-ar',  # Arabic
    'hindi': 'Helsinki-NLP/opus-mt-en-hi',  # India
    'tagalog': 'Helsinki-NLP/opus-mt-en-tl',  # Philippines (Tagalog)
    'vietnamese': 'Helsinki-NLP/opus-mt-en-vi',  # Vietnam
    'korean': 'Helsinki-NLP/opus-mt-en-ko',  # South Korea
    'greek': 'Helsinki-NLP/opus-mt-en-el',  # Greece
    'punjabi': 'Helsinki-NLP/opus-mt-en-pa',  # Punjab region
    'bengali': 'Helsinki-NLP/opus-mt-en-bn',  # Bangladesh
    'tamil': 'Helsinki-NLP/opus-mt-en-ta',  # Tamil Nadu, India
    'sinhala': 'Helsinki-NLP/opus-mt-en-si',  # Sri Lanka (Sinhala)
    'persian': 'Helsinki-NLP/opus-mt-en-fa',  # Iran
    'turkish': 'Helsinki-NLP/opus-mt-en-tr',  # Turkey
    'russian': 'Helsinki-NLP/opus-mt-en-ru',  # Russia
    'filipino': 'Helsinki-NLP/opus-mt-en-fil',  # Philippines (Filipino)
    'indonesian': 'Helsinki-NLP/opus-mt-en-id',  # Indonesia
    'thai': 'Helsinki-NLP/opus-mt-en-th',  # Thailand
    'malay': 'Helsinki-NLP/opus-mt-en-ms',  # Malaysia
    'japanese': 'Helsinki-NLP/opus-mt-en-ja',  # Japan
    'portuguese': 'Helsinki-NLP/opus-mt-en-pt',  # Portugal
    'dutch': 'Helsinki-NLP/opus-mt-en-nl',  # Netherlands
    'polish': 'Helsinki-NLP/opus-mt-en-pl',  # Poland
    'ukrainian': 'Helsinki-NLP/opus-mt-en-uk',  # Ukraine
}


def translate_item(language, item):
    """
    Translate the given item to the specified language.

    Args:
        language (str): The target language for translation.
        item (str): The text to be translated.

    Returns:
        str: The translated text or an error message.
    """
    language = language.lower()

    if not item:
        return "Error: Input text is empty."

    if language in SUPPORTED_LANGUAGES:
        try:
            translator = pipeline("translation", model=SUPPORTED_LANGUAGES[language])
            translation_result = translator(item)
            return translation_result[0]['translation_text']
        except Exception as e:
            return f"Error during translation: {str(e)}"
    else:
        return f"Translation for {language} is not supported."


if __name__ == '__main__':
    app.run(port=5000)
# Example usage
# translated_item = translate_item('russian', "It's a very beautiful day")
# print(translated_item)
